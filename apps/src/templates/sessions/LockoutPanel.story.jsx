import React from 'react';

import LockoutPanel from './LockoutPanel';

const DAYS = 1000 * 60 * 60 * 24;

export default {
  component: LockoutPanel,
};

const Template = args => (
  <LockoutPanel
    apiURL="/permissions"
    deleteDate={new Date(Date.now() + 6 * DAYS)}
    disallowedEmail="student@test.com"
    {...args}
  />
);

export const NewAccount = Template.bind({});
NewAccount.args = {};

export const NewPreLockoutAccount = Template.bind({});
NewPreLockoutAccount.args = {
  isPreLockoutUser: true,
};

export const PendingRequest = Template.bind({});
PendingRequest.args = {
  pendingEmail: 'blah@blarg.com',
  requestDate: new Date(Date.now() - 2 * DAYS),
};
