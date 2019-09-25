import * as Yup from 'yup';

export default Yup.object().shape({
  vCodeGroup: Yup.boolean().oneOf([false], 'All values are required'),
  value1: Yup.string().required('Required'),
  value2: Yup.string().required('Required'),
  value3: Yup.string().required('Required'),
  value4: Yup.string().required('Required'),
  value5: Yup.string().required('Required'),
  value6: Yup.string().required('Required'),
  value7: Yup.string().required('Required')
});
