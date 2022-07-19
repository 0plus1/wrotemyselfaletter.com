import { View, StyleSheet } from 'react-native';
import { Button, Input } from '@ui-kitten/components';
import { useForm, Controller } from 'react-hook-form'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Captcha from '../components/Captcha';
import Datepicker from '../components/Datepicker';
import { useEffect } from 'react';

dayjs.extend(relativeTime);

const CreateLetterForm = ({ initialDate, onSubmit, onDateChanged, isSubmitting } : { initialDate: Date, onSubmit: Function, onDateChanged: Function, isSubmitting: boolean}) => {
  const { control, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      date: initialDate,
      email: '',
    },
  });
  useEffect(() => {
    onDateChanged(watch('date'));
  }, [watch('date')]);

  return (
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
        render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => {
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
        render={({ field, fieldState: { error } }) => (
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
      <Button onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        Send
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    padding: '1%',
  },
  input: {
    marginBottom: 10,
  },
});

export default CreateLetterForm;
