import React from 'react';
import {useSelector} from 'react-redux';

import Button from '@cdo/apps/componentLibrary/button/Button';
import copyToClipboard from '@cdo/apps/util/copyToClipboard';
import {AichatState} from '@cdo/apps/aichat/redux/aichatRedux';
import analyticsReporter from '@cdo/apps/lib/util/AnalyticsReporter';
import {EVENTS, PLATFORMS} from '@cdo/apps/lib/util/AnalyticsConstants';
import {AiInteractionStatus as Status} from '@cdo/generated-scripts/sharedConstants';

const CopyButton: React.FunctionComponent = () => {
  const storedMessages = useSelector(
    (state: {aichat: AichatState}) => state.aichat.chatMessages
  );

  const handleCopy = () => {
    const textToCopy = storedMessages
      .map(
        message =>
          `[${message.timestamp || 'XXXX-XX-XX XX:XX'} - ${message.role}] ${
            message.status === Status.PROFANITY_VIOLATION
              ? '[FLAGGED AS PROFANITY]'
              : message.chatMessageText
          }`
      )
      .join('\n');
    copyToClipboard(
      textToCopy,
      () => alert('Text copied to clipboard'),
      () => {
        console.error('Error in copying text');
      }
    );
    analyticsReporter.sendEvent(
      EVENTS.CHAT_ACTION,
      {
        action: 'Copy chat history',
      },
      PLATFORMS.BOTH
    );
  };

  return (
    <Button
      onClick={handleCopy}
      text="Copy Chat"
      iconLeft={{iconName: 'clipboard'}}
      size="xs"
      color="white"
      type="secondary"
    />
  );
};

export default CopyButton;
