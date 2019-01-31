"use strict";

import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { createStackNavigator } from "react-navigation";
import {
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems
} from "react-navigation";

import SigninPage from "./src/screens/SignInUp/SigninPage";
import SignupPage from "./src/screens/SignInUp/SignupPage";
import LadderSelectPage from "./src/LadderSelectPage";
import SelectedLadderPage from "./src/SelectedLadderPage";
import EmailVerification from "./src/screens/SignInUp/EmailVerification";
import ForgotPasswordCode from "./src/screens/SignInUp/ForgotPasswordCode";
import ForgotPasswordForm from "./src/screens/SignInUp/ForgotPasswordForm";
import ForgotPasswordNew from "./src/screens/SignInUp/ForgotPasswordNew";
import PersonalProfile from "./src/screens/Profile/PersonalProfile";
import LadderNews from "./src/screens/Ladder/LadderNews";
import Settings from "./src/screens/Others/Settings";
import Support from "./src/screens/Others/Support";
import FindLadder from "./src/screens/Ladder/FindLadder";
import RuleMenuPage from "./src/screens/AdminDashboard/ruleTab/RuleMenuPage";
import GeneralRulePage from "./src/screens/AdminDashboard/ruleTab/GeneralRulePage";
import ChallengerRulePage from "./src/screens/AdminDashboard/ruleTab/ChallengerRulePage";
import DefenderRulePage from "./src/screens/AdminDashboard/ruleTab/DefenderRulePage";
import PlayReportRulePage from "./src/screens/AdminDashboard/ruleTab/PlayReportRulePage";
import GeneralMenuPage from "./src/screens/AdminDashboard/generalTab/GeneralMenuPage";
import MembershipManagementPage from "./src/screens/AdminDashboard/generalTab/MembershipManagementPage";
import AdminTransferPage from "./src/screens/AdminDashboard/generalTab/AdminTransferPage";
import AdminNewsPage from "./src/screens/AdminDashboard/generalTab/AdminNewsPage";
import LadderStatusPage from "./src/screens/AdminDashboard/generalTab/LadderStatusPage";
import AdminDashboard from "./src/screens/AdminDashboard/AdminDashboard";
import LadderDashboardAdmin from "./src/screens/LadderDashboard/LadderDashboardAdmin";
import ScoreReportingForm from "./src/screens/ScoreReporting/ScoreReportingForm";

import Amplify, { Auth } from "aws-amplify";
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import awsmobile from "./aws-exports";

import AvailableChallenge from "./src/screens/AvailableChallenge/AvailableChallenge";
import PendingRequest from "./src/screens/PendingRequest/PendingRequest";
import PendingMatch from "./src/screens/PendingMatch/PendingMatch";
import ScoreReporting from "./src/screens/ScoreReporting/ScoreReporting";
import globalStyles from "./src/globalStyles";

Amplify.configure(awsmobile);

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: globalStyles.sideMenuColor,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "30%"
    }}
  >
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const LadderNewsStack = createStackNavigator({
  // For header options
  LadderNews: { screen: LadderNews },
  PersonalProfile: { screen: PersonalProfile },
  Settings: { screen: Settings },
  Support: { screen: Support },
  FindLadder: { screen: FindLadder },
  LadderDashboardAdmin: { screen: LadderDashboardAdmin },
  AdminDashboard: { screen: AdminDashboard },
  ScoreReportingForm: { screen: ScoreReportingForm }
});

const DrawerNav = createDrawerNavigator(
  {
    LadderNews: {
      screen: LadderNewsStack,
      navigationOptions: () => ({
        drawerLabel: () => null
      })
    },
    InviteMemberShip: {
      screen: PersonalProfile,
      navigationOptions: () => ({
        title: "Invite Membership"
      })
    },
    FindLadder: {
      screen: FindLadder
    },
    CreateLadder: {
      screen: PersonalProfile,
      navigationOptions: () => ({
        title: "Create Ladder"
      })
    },
    Settings: {
      screen: Settings
    },
    SignOut: {
      screen: PersonalProfile,
      navigationOptions: () => ({
        title: "Sign Out"
      })
    }
  },
  {
    initialRouteName: "LadderNews",
    drawerPosition: "right",
    headerMode: "none",
    contentComponent: CustomDrawerComponent,
    drawerWidth: 220,
    contentOptions: {
      labelStyle: {
        fontSize: 18,
        color: "white",
        fontWeight: "normal",
        fontFamily: globalStyles.mainFontMedium
      }
    }
  }
);
const Application = createStackNavigator({
  Home: { screen: SigninPage },
  SignupPage: { screen: SignupPage },
  LadderSelectPage: { screen: LadderSelectPage },
  SelectedLadderPage: { screen: SelectedLadderPage },
  EmailVerification: { screen: EmailVerification },
  ForgotPasswordCode: { screen: ForgotPasswordCode },
  ForgotPasswordForm: { screen: ForgotPasswordForm },
  ForgotPasswordNew: { screen: ForgotPasswordNew },
  RuleMenuPage: { screen: RuleMenuPage },
  GeneralMenuPage: { screen: GeneralMenuPage },
  MembershipManagementPage: { screen: MembershipManagementPage },
  AdminTransferPage: { screen: AdminTransferPage },
  AdminNewsPage: { screen: AdminNewsPage },
  LadderStatusPage: { screen: LadderStatusPage },
  GeneralRulePage: { screen: GeneralRulePage },
  ChallengerRulePage: { screen: ChallengerRulePage },
  DefenderRulePage: { screen: DefenderRulePage },
  PlayReportRulePage: { screen: PlayReportRulePage }
});

const MainNavigation = createSwitchNavigator({
  AuthStack: Application, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  HomeDrawer: DrawerNav
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <MainNavigation />
        </Rehydrated>
      </ApolloProvider>
    );
  }
}
