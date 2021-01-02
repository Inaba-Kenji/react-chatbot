import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Chat = (props) => {
  // 真偽値が代入される
  const isQuestion = (props.type === 'question');
  // 三項演算子の書き方
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return(
    <ListItem>
        <ListItemAvatar className={classes}>
          <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
  <div className="p-chat__bubble">{props.text}</div>
      </ListItem>
  )

}

export default Chat