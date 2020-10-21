import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { List, TouchableRipple, Divider, Title, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
    const { theme } = props;
    return (
        <DrawerContentScrollView {...props}>
            <View style={[styles.logoContainer, { backgroundColor: theme.colors.background }]}>
                <Icon name='book' size={40} color='#EDC289'
                    style={styles.logo} />
                <Title style={styles.logoText}>Todo-ly</Title>
            </View>
            <Divider />
            <TouchableRipple
                onPress={() => props.navigation.navigate('Home')}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <List.Item
                    title="Home"
                    left={props => <List.Icon {...props} icon="home" />}
                />
            </TouchableRipple>
            <TouchableRipple
                onPress={() => props.navigation.navigate('Settings')}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <List.Item
                    title="Settings"
                    left={props => <List.Icon {...props} icon="settings" />}
                />
            </TouchableRipple>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    logo: {
        marginRight: 10
    },
    logoText: {
        fontSize: 25
    }
})

export default withTheme(DrawerContent);