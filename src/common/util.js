export const avatar = (image) => {
  if (image) {
    return "data:image/jpeg;base64," + image
  }
  return 'http://localhost:8069/base/static/src/img/avatar.png'
}
