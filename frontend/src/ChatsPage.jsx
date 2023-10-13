import { PrettyChatWindow } from 'react-chat-engine-pretty'
import React from 'react'

const ChatsPage = (props) => {

  return (
    <>
        <div style={{height: '100vh'}}>
          <PrettyChatWindow projectId='9384bcc0-e2d7-4ce4-bb72-f704866e2650' username={props.user.username} secret={props.user.secret} style={{height: '100vh'}} />
        </div>
    </>
  )
}

export default ChatsPage;