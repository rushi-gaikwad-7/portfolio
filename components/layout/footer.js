import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>Don't be a stranger.!</h2>
      <p>Let's connect..!</p>
      <div className={classes.socialMedia}>
        <a
          href='https://github.com/rushig777'
          target='_blank'
          rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/gaikwadrushi/'
          target='_blank'
          rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a
                href='https://twitter.com/_RUSHI_GAIKWAD'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>
      </div>
      <div>© 2022 Designed and Built by Rushi with 🖤</div>
    </footer>
  );
};
export default Footer;
