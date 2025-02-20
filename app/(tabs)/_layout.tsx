import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "green",
            headerStyle: {
                backgroundColor: "#25292e",
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: "#25292e",
            }
        }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
            headerTitle: 'Home', 
            tabBarIcon: ({focused, color}) => (
                <Ionicons
                    name={focused ? "home-sharp" : "home-outline"}
                    color={color}
                    size={30}
                />
            )
        }}/>

        <Tabs.Screen 
        name="about" 
        options={{
            headerTitle: 'About', 
            tabBarIcon: ({focused, color}) => (
                <Ionicons
                    name={focused ? "information-circle" : "information-circle-outline"}
                    color={color}
                    size={30}
                />
            )
        }}/>

        <Tabs.Screen 
        name="help" 
        options={{
            headerTitle: 'Help', 
            tabBarIcon: ({focused, color}) => (
                <Ionicons
                    name={focused ? "help-sharp" : "help-outline"}
                    color={color}
                    size={30}
                />
            )
        }}/>        
    </Tabs>
  );
}
