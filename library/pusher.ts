import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherSevrer = new PusherServer({
  appId: "1730458",
  key: "4971014ea0bdd9f72a28",
  secret: "aca3cdd1d676bc104eec",
  cluster: "us2",
  useTLS: true,
});

export const pusherClient = new PusherClient("4971014ea0bdd9f72a28", {
  cluster: "us2",
  authEndpoint: "/api/pusher-auth",
  authTransport: "ajax",
  auth: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});
