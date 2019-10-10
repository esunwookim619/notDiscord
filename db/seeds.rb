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
Channel.destroy_all
Message.destroy_all
Friendship.destroy_all

demo_user = User.create(email: "demo@gmail.com", password: "password", username: "DemoUser")

user_1 = User.create(email: "email@gmail.com", password: "password", username: "bestUser")

demoserver_1 = Server.create(admin_id: demo_user.id, server_name: "AppAcademy")
demoserver_2 = Server.create(admin_id: demo_user.id, server_name: "LeagueofLegends")
demoserver_3 = Server.create(admin_id: demo_user.id, server_name: "Starcraft")

demoserver_1_channel = Channel.create(server_id: demoserver_1.id, channel_name: "general")
demoserver_2_channel = Channel.create(server_id: demoserver_2.id, channel_name: "general")
demoserver_3_channel = Channel.create(server_id: demoserver_3.id, channel_name: "general")

user_1_server_1 = Server.create(admin_id: user_1.id, server_name: "bestUserServer1")
user_1_server_2 = Server.create(admin_id: user_1.id, server_name: "bestUserServer2")

user_1_server_1_channel = Channel.create(server_id: user_1_server_1.id, channel_name: "general")
user_1_server_2_channel = Channel.create(server_id: user_1_server_2.id, channel_name: "general")


