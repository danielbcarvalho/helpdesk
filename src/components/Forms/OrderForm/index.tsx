import React, { useState } from 'react';

import { Form, Title } from './styles';
import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { TextArea } from '@components/Controllers/TextArea';

import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export function OrderForm() {
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
      .collection('Orders')
      .add({
        patrimony: patrimony,
        description: description,
        status: 'open',
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Sucesso', 'Ordem de serviço criada com sucesso!');
        setPatrimony('');
        setDescription('');
      }
      )
      .catch((error) => {
        Alert.alert('Erro', error.message);
      }
      )
      .finally(() => setIsLoading(false));

  }

  return (
    <Form>
      <Title>Novo chamado</Title>
      <Input placeholder="Número do Patrimônio" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />

      <Button title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}