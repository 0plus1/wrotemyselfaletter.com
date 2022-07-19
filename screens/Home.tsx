import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Layout, Input, Text } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Captcha from '../components/Captcha';
import Datepicker from '../components/Datepicker';
import FormHeader from '../components/FormHeader';
import { createLetter } from '../modules/API';
import CreateLetterForm from '../components/CreateLetterForm';
import SubmissionResult from '../components/SubmissionResult';
import FormFooter from '../components/FormFooter';

dayjs.extend(relativeTime);

const Home = ({ navigation }) => {
  const initialDate = dayjs().add(1, 'year').toDate();
  const [date, setDate] = useState(initialDate);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const onSubmit = ({ letter, email, date }) => {
    setIsSubmitting(true);
    createLetter(email, letter, date)
      .then((r) => {
        const { data } = r;
        const { success, message } = data;
        if (success) {
          setSubmissionResult(message);
        }
      })
      .catch((e) => {
        navigation.navigate('APIError', {
          error: 'Could not create letter. Please try again later.',
        });
      });
  };

  return (
    <Layout style={styles.container}>
      <View style={{ maxWidth: 420, marginHorizontal: 'auto' }}>
      <FormHeader />
      {submissionResult ? (
        <SubmissionResult result={submissionResult} onSendAnother={() => { setSubmissionResult(null); setIsSubmitting(false); }} />
      ) : (
        <>
          <CreateLetterForm initialDate={initialDate} onSubmit={onSubmit} isSubmitting={isSubmitting} onDateChanged={(newDate: Date) => setDate(newDate)}/>
          <FormFooter date={date} navigation={navigation} />
        </>
      )}
      </View>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    padding: '1%',
  },
  input: {
    marginBottom: 10,
  },
});

export default Home;
