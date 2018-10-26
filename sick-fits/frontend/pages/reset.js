import ResetComponent from '../components/Reset';

const Reset = props => (
  <div>
    <ResetComponent resetToken={props.query.resetToken} />
  </div>
);

export default Reset;
