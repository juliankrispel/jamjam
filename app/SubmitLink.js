import React from 'react';
import { TouchableHighlight, Button, StyleSheet, Text, View } from 'react-native';
import { Container, Content, Form, Item, Input } from 'native-base';

const SubmitLink = () => (
  <Container>
    <Content>
      <Form>
        <Item>
          <Input placeholder="Link" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
      </Form>
    </Content>
  </Container>
)

export default SubmitLink;
