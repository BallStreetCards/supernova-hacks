export default interface PlayerDetails {
  PlayerID: number;
  SportsDataID: string;
  Status: string;
  TeamID: number;
  Team: string;
  Jersey: number;
  PositionCategory: string;
  Position: string;
  FirstName: string;
  LastName: string;
  Height: number;
  Weight: number;
  BirthDate: Date | string;
  BirthCity: string;
  BirthState: string;
  BirthCountry: string;
  HighSchool?: string;
  College: string;
  Salary: number;
  PhotoUrl: string;
  Experience: number;
  SportRadarPlayerID: string;
  RotoworldPlayerID: number;
  RotoWirePlayerID: number;
  FantasyAlarmPlayerID: number;
  StatsPlayerID: number;
  SportsDirectPlayerID: number;
  XmlTeamPlayerID?: string;
  InjuryStatus?: string;
  InjuryBodyPart?: string;
  InjuryStartDate?: string;
  InjuryNotes?: string;
  FanDuelPlayerID: number;
  DraftKingsPlayerID: number;
  YahooPlayerID: number;
  FanDuelName: string;
  DraftKingsName: string;
  YahooName: string;
  DepthChartPosition: string;
  DepthChartOrder: number;
  GlobalTeamID: number;
  FantasyDraftName: string;
  FantasyDraftPlayerID: number;
  UsaTodayPlayerID: number;
  UsaTodayHeadshotUrl: string;
  UsaTodayHeadshotNoBackgroundUrl: string;
  UsaTodayHeadshotUpdated: Date;
  UsaTodayHeadshotNoBackgroundUpdated: Date;
  NbaDotComPlayerID: number;
}