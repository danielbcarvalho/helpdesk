import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@screens/Home';
import { AuthRoutes } from './auth.routes';
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export function Routes() {
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ Routes ~ user", user)

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {!user ? <AuthRoutes /> : <Home />}
    </NavigationContainer>
  );
}
