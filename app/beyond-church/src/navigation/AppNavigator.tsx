import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { FontSize, FontWeight } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import WatchScreen from '../screens/WatchScreen';
import GrowScreen from '../screens/GrowScreen';
import GiveScreen from '../screens/GiveScreen';
import ConnectScreen from '../screens/ConnectScreen';

export type RootTabParamList = {
  Home: undefined;
  Watch: undefined;
  Grow: undefined;
  Give: undefined;
  Connect: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const TAB_ICONS: Record<keyof RootTabParamList, { active: IconName; inactive: IconName }> = {
  Home: { active: 'home', inactive: 'home-outline' },
  Watch: { active: 'play-circle', inactive: 'play-circle-outline' },
  Grow: { active: 'book', inactive: 'book-outline' },
  Give: { active: 'heart', inactive: 'heart-outline' },
  Connect: { active: 'people', inactive: 'people-outline' },
};

export default function AppNavigator() {
  const { colors, isDark } = useTheme();

  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme : DefaultTheme).colors,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
      primary: colors.accent,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: colors.surface },
          headerTitleStyle: {
            fontWeight: FontWeight.black,
            fontSize: FontSize.md,
            color: colors.text,
          },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: colors.tabBar,
            borderTopColor: colors.border,
          },
          tabBarActiveTintColor: colors.tabBarActive,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarLabelStyle: {
            fontSize: FontSize.xs,
            fontWeight: FontWeight.semibold,
          },
          tabBarIcon: ({ focused, color, size }) => {
            const icons = TAB_ICONS[route.name as keyof RootTabParamList];
            const iconName = focused ? icons.active : icons.inactive;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Beyond Church', tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Watch"
          component={WatchScreen}
          options={{ title: 'Messages' }}
        />
        <Tab.Screen
          name="Grow"
          component={GrowScreen}
          options={{ title: 'Grow' }}
        />
        <Tab.Screen
          name="Give"
          component={GiveScreen}
          options={{ title: 'Give', headerShown: false }}
        />
        <Tab.Screen
          name="Connect"
          component={ConnectScreen}
          options={{ title: 'Connect' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
