// Copyright 2020-2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number as numberKnob, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ConversationHero } from './ConversationHero';
import { setup as setupI18n } from '../../../js/modules/i18n';
import enMessages from '../../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

const getAbout = () => text('about', '👍 Free to chat');
const getTitle = () => text('name', 'Cayce Bollard');
const getName = () => text('name', 'Cayce Bollard');
const getProfileName = () => text('profileName', 'Cayce Bollard (profile)');
const getAvatarPath = () =>
  text('avatarPath', '/fixtures/kitten-4-112-112.jpg');
const getPhoneNumber = () => text('phoneNumber', '+1 (646) 327-2700');

const updateSharedGroups = action('updateSharedGroups');

storiesOf('Components/Conversation/ConversationHero', module)
  .add('Direct (Three Other Groups)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={getTitle()}
          avatarPath={getAvatarPath()}
          name={getName()}
          profileName={getProfileName()}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={['NYC Rock Climbers', 'Dinner Party', 'Friends 🌿']}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (Two Other Groups)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={getTitle()}
          avatarPath={getAvatarPath()}
          name={getName()}
          profileName={getProfileName()}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={['NYC Rock Climbers', 'Dinner Party']}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (One Other Group)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={getTitle()}
          avatarPath={getAvatarPath()}
          name={getName()}
          profileName={getProfileName()}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={['NYC Rock Climbers']}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (No Groups, Name)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={getTitle()}
          avatarPath={getAvatarPath()}
          name={getName()}
          profileName={text('profileName', '')}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={[]}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (No Groups, Just Profile)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', 'Cayce Bollard (profile)')}
          avatarPath={getAvatarPath()}
          name={text('name', '')}
          profileName={getProfileName()}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={[]}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (No Groups, Just Phone Number)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          about={getAbout()}
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', '+1 (646) 327-2700')}
          avatarPath={getAvatarPath()}
          name={text('name', '')}
          profileName={text('profileName', '')}
          phoneNumber={getPhoneNumber()}
          conversationType="direct"
          updateSharedGroups={updateSharedGroups}
          sharedGroupNames={[]}
          unblurAvatar={action('unblurAvatar')}
        />
      </div>
    );
  })
  .add('Direct (No Groups, No Data)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          i18n={i18n}
          title={text('title', 'Unknown contact')}
          acceptedMessageRequest
          avatarPath={getAvatarPath()}
          name={text('name', '')}
          profileName={text('profileName', '')}
          phoneNumber={text('phoneNumber', '')}
          conversationType="direct"
          sharedGroupNames={[]}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Direct (No Groups, No Data, Not Accepted)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          i18n={i18n}
          title={text('title', 'Unknown contact')}
          acceptedMessageRequest={false}
          avatarPath={getAvatarPath()}
          name={text('name', '')}
          profileName={text('profileName', '')}
          phoneNumber={text('phoneNumber', '')}
          conversationType="direct"
          sharedGroupNames={[]}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Group (many members)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', 'NYC Rock Climbers')}
          name={text('groupName', 'NYC Rock Climbers')}
          conversationType="group"
          membersCount={numberKnob('membersCount', 22)}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Group (one member)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', 'NYC Rock Climbers')}
          name={text('groupName', 'NYC Rock Climbers')}
          conversationType="group"
          membersCount={1}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Group (zero members)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', 'NYC Rock Climbers')}
          name={text('groupName', 'NYC Rock Climbers')}
          conversationType="group"
          membersCount={0}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Group (No name)', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          acceptedMessageRequest
          i18n={i18n}
          title={text('title', 'Unknown group')}
          name={text('groupName', '')}
          conversationType="group"
          membersCount={0}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  })
  .add('Note to Self', () => {
    return (
      <div style={{ width: '480px' }}>
        <ConversationHero
          i18n={i18n}
          isMe
          title={getTitle()}
          conversationType="direct"
          phoneNumber={getPhoneNumber()}
          unblurAvatar={action('unblurAvatar')}
          updateSharedGroups={updateSharedGroups}
        />
      </div>
    );
  });
