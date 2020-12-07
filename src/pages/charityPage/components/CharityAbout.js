import './CharityAbout.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityAbout() {
  return (
    <Grid container className="CharityAbout">
      <Grid item md={12} className="">
        <h3>About</h3>
        <p>UNICEF is the world's leading child-focused humanitarian and development agency. Through innovative programs and advocacy work, we secure children's rights in virtually every country. Our global reach, unparalleled influence on policymakers, and diverse partnerships make us an instrumental force in shaping a world fit for children. UNICEF is supported entirely by voluntary donations and helps all children, regardless of race, religion or politics.</p>
      </Grid>
    </Grid>
  );
}