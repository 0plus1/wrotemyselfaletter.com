import { View, StyleSheet } from 'react-native';
import { Text, Datepicker as KittenUIDatePicker } from '@ui-kitten/components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Datepicker = ({ error, date, setDate } : { error: boolean, date: Date }) => {
  const onSelect = (date: Date) => {
    setDate(dayjs(date).endOf('day').toDate());
  }

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText} category='label'>
        {`Deliver it ${dayjs().to(date)}`}
      </Text>
      <KittenUIDatePicker
        status={error ? 'danger' : 'primary'}
        date={date}
        min={new Date()}
        max={dayjs().add(11, 'years').endOf('year').endOf('month').endOf('day').toDate()}
        onSelect={onSelect}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 14,
  },
});

export default Datepicker;
