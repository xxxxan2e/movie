// 프로덕션 모드로 배포하는 경우 이곳에서 아래의 변수를 읽게 됨
module.exports = {
    mongoURI:process.env.MONGO_URI
}