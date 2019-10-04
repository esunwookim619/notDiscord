# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
ServerMembership.destroy_all

demo_user = User.create(email: "demo@gmail.com", password: "password", username: "DemoUser")

user_1 = User.create(email: "email@gmail.com", password: "password", username: "bestUser")
user_2 = User.create(email: "email2@gmail.com", password: "password", username: "bestUser2")
user_3 = User.create(email: "email3@gmail.com", password: "password", username: "bestUser3")

server_1 = Server.create(admin_id: user_1.id, server_name: "server1")
server_2 = Server.create(admin_id: user_2.id, server_name: "server2")
server_3 = Server.create(admin_id: user_3.id, server_name: "server3")

demoserver_1 = Server.create(admin_id: demo_user.id, server_name: "AppAcademy")
demoserver_2 = Server.create(admin_id: demo_user.id, server_name: "LeagueofLegends")
demoserver_3 = Server.create(admin_id: demo_user.id, server_name: "Starcraft")
demoserver_4 = Server.create(admin_id: demo_user.id, server_name: "Overwatch")

sm_1 = ServerMembership.create(server_id: server_1.id, member_id: user_2.id)
sm_2 = ServerMembership.create(server_id: server_1.id, member_id: user_3.id)

