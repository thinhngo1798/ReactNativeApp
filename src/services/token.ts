export const userToken = (userName : string) => {
      const userAndTokenMapper = new Map();

      userAndTokenMapper.set("john","V7SY0KKFyg9zEgCh2zpCO9");
      userAndTokenMapper.set("thanh","QLD06kNcFx9vvOTFvIqOCu");

      userAndTokenMapper.set("thinh","X55yxvLefsBfQNvAxfJ_Ed");

      return userAndTokenMapper.get(userName.toLowerCase());
}