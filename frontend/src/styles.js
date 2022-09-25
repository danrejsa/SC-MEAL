import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:""
  },
  heading: {
    color: '#FBA536',
  },
  ul: {
    justifyContent: 'space-round'
  },
  image: {
    marginLeft: '15px',
  },
}));