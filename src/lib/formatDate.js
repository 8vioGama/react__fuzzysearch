import moment from 'moment';

const formatDate = (date) => {
  const parsedDate = moment(date, 'DD-MM-YYYY');
  return parsedDate.format('DD-MM-YYYY');
};

export default formatDate;
