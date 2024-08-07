export enum ClientOpCode {
  Version = 0,
  CreateCharRequest = 2,
  Login = 3,
  CreateCharFinalize = 4,
  RequestMapData = 5,
  ClientWalk = 6,
  Pickup = 7,
  ItemDrop = 8,
  ExitRequest = 11,
  RequestDisplayEntity = 12,
  Ignore = 13,
  PublicMessage = 14,
  UseSpell = 15,
  ClientRedirected = 16,
  ClientTurn = 17,
  DefaultAttack = 19,
  RequestWorldList = 24,
  Whipser = 25,
  UserOptionToggle = 27,
  UseItem = 28,
  Emote = 29,
  SetNotepad = 35,
  GoldDrop = 36,
  PasswordChange = 38,
  ItemDroppedOnCreature = 41,
  GoldDroppedOnCreature = 42,
  RequestProfile = 45,
  GroupRequest = 46,
  ToogleGroup = 47,
  SwapSlot = 48,
  RequestRefresh = 56,
  RequestPursuit = 57,
  DialogResponse = 58,
  BoardRequest = 59,
  UseSkill = 62,
  WorldMapClick = 63,
  ClientException = 66,
  Click = 67,
  Unequip = 68,
  HeartBeat = 69,
  RaiseStat = 71,
  Exchange = 74,
  RequestLoginNotice = 75,
  BeginChant = 77,
  Chant = 78,
  Profile = 79,
  RequestServerTable = 87,
  SequenceChange = 98,
  RequestHomepage = 104,
  SynchronizeTicks = 117,
  SocialStatus = 121,
  RequestMetaData = 123,
}

export enum ServerOpCode {
  ConnectionInfo = 0,
  LoginMessage = 2,
  Redirect = 3,
  Location = 4,
  UserId = 5,
  DisplayVisibleEntities = 7,
  Attributes = 8,
  ServerMessage = 10,
  ConfirmClientWalk = 11,
  CreatureWalk = 12,
  ChatMessage = 13,
  RemoveObject = 14,
  AddItemToPane = 15,
  RemoveItemFromPane = 16,
  CreatureTurn = 17,
  HealthBar = 19,
  MapInfo = 21,
  AddSpellToPane = 23,
  RemoveSpellFromPane = 24,
  Sound = 25,
  BodyAnimation = 26,
  Notepad = 27,
  MapChangeComplete = 31,
  LightLevel = 32,
  RefreshReponse = 34,
  Animation = 41,
  AddSkillToPane = 44,
  RemoveSkillFromPane = 45,
  WorldMap = 46,
  Menu = 47,
  Dialog = 48,
  Board = 49,
  Door = 50,
  DisplayAisling = 51,
  Profile = 52,
  WorldList = 54,
  Equipment = 55,
  Unequip = 56,
  SelfProfile = 57,
  Effect = 58,
  HeartBeatResponse = 59,
  MapData = 60,
  Cooldown = 63,
  Exchange = 66,
  CancelCasting = 72,
  ProfileRequest = 73,
  ForceClient = 75,
  ConfirmExit = 76,
  ServerTable = 86,
  MapLoadComplete = 88,
  LoginNotice = 96,
  GroupRequest = 99,
  LoginControls = 102,
  MapChangePending = 103,
  SynchronizeTicks = 104,
  MetaData = 111,
  AcceptConnection = 126,
}
