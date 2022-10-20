import React from 'react';
import auth from '@react-native-firebase/auth';

import { LogoutButton } from '@components/Controllers/LogoutButton';
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
  function handleSignOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch((error) => console.log("🚀 ~ file: index.tsx ~ line 18 ~ handleSignOut ~ error", error));

   }

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}