import { createBottomTabNavigator } from 'react-navigation';
import TestsStacks from './TestsStacks';
import PostsStacks from './PostsStacks';
import HomeStack from './HomeStack';
export default createBottomTabNavigator({
  HomeStack: HomeStack,
  TestsStacks: TestsStacks,
  PostsStacks: PostsStacks
})