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

user_1 = User.create(email: "email@gmail.com", password: "password", username: "noobslayerz")
user_2 = User.create(email: "user2@gmail.com", password: "password", username: "Discordcritic")
user_3 = User.create(email: "user3@gmail.com", password: "password", username: "bestMidNA")
user_4 = User.create(email: "user4@gmail.com", password: "password", username: "ConnorAATA")



demoserver_1 = Server.create(admin_id: demo_user.id, server_name: "AppAcademy")
demoserver_2 = Server.create(admin_id: demo_user.id, server_name: "LeagueofLegends")

sm_1 = ServerMembership.create(server_id: demoserver_1.id, member_id: user_4.id)
sm_2 = ServerMembership.create(server_id: demoserver_2.id, member_id: user_2.id)
sm_3 = ServerMembership.create(server_id: demoserver_2.id, member_id: user_3.id)

f_1 = Friendship.create(self_id: demo_user.id, friend_id: user_2.id)
f_2 = Friendship.create(self_id: user_2.id, friend_id: demo_user.id)

f_3 = Friendship.create(self_id: demo_user.id, friend_id: user_3.id)
f_4 = Friendship.create(self_id: user_3.id, friend_id: demo_user.id)

f_5 = Friendship.create(self_id: demo_user.id, friend_id: user_4.id)
f_6 = Friendship.create(self_id: user_4.id, friend_id: demo_user.id)

demoserver_1_channel = Channel.create(server_id: demoserver_1.id, channel_name: "general")
demoserver_2_channel = Channel.create(server_id: demoserver_2.id, channel_name: "general")

user_1_server_1 = Server.create(admin_id: user_1.id, server_name: "NONOOBSPLZ")
user_1_server_2 = Server.create(admin_id: user_1.id, server_name: "NOSLEEP")

user_1_server_1_channel = Channel.create(server_id: user_1_server_1.id, channel_name: "general")
user_1_server_2_channel = Channel.create(server_id: user_1_server_2.id, channel_name: "general")


