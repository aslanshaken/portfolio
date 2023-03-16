export default function getAppInfo(key = '') {
  switch (key) {
    case 'name':
      return process.env.APP_NAME;
    default:
      break;
  }
}
