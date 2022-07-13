import { View, StyleSheet } from 'react-native';
import { Button, Layout, Input, Text } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Captcha from '../components/Captcha';
import Datepicker from '../components/Datepicker';
import FormHeader from '../components/FormHeader';

dayjs.extend(relativeTime);

const Home = ({ navigation }) => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      date: dayjs().add(1, 'year').toDate(),
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout style={styles.container}>
      <View style={{ maxWidth: 420, marginHorizontal: 'auto' }}>
      <FormHeader />
      <View style={styles.formContainer}>
        <Controller
          name='letter'
          rules={{ required: true }}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              status={error ? 'danger' : 'primary'}
              multiline={true}
              style={styles.input}
              textStyle={{ minHeight: 200, outlineStyle: 'none', }}
              placeholder='Dear...'
            />
          )}
        />

        <Controller
          name='date'
          control={control}
          render={({ field: {onChange, onBlur, value, name }, fieldState: { error } }) => {
            return (
              <Datepicker
                {...{ onChange, onBlur, value, name }}
                date={value}
                error={error}
                setDate={(date) => { onChange(date); }}
              />
            );
           }}
        />

        <Controller
          name='email'
          rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }}
          control={control}
          render={({ field, fieldState: { error }  }) => (
            <Input
              {...field}
              onFocus={() => { field.onBlur(); }}
              status={error ? 'danger' : 'primary'}
              style={styles.input}
              textStyle={{ width: '100%', outlineStyle: 'none', }}
              size='large'
              placeholder='Your e-mail'
            />
          )}
        />

        <Captcha onVerify={(token, ekey) => console.log(token, ekey)} />
        <Button onPress={handleSubmit(onSubmit)}>
          Send
        </Button>
      </View>
      <Text category='c1' style={{ textAlign: 'center'}}>
        After confirming your email address, you  will receive a letter on the {dayjs(watch('date')).format('DD MMMM YYYY')}.
        By sending your letter, you agree to the
        {' '}
        <Text onPress={() => navigation.navigate('Terms') } category='c1' style={styles.textLink}>
          terms of service
        </Text>
        {' '}
        and
        {' '}
        <Text onPress={() => navigation.navigate('Terms') } category='c1' style={styles.textLink}>
          privacy policy
        </Text>
        .
      </Text>
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
  textLink: {
    textDecorationLine: 'underline',
  }
});

export default Home;
