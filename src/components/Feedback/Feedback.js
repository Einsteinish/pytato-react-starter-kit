import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="https://github.com/Einsteinish/pytato-react-starter-kit/issues/new"
        >Report an issue</a>
      </div>
    </div>
  );
}

export default withStyles(s)(Feedback);
