export const set_cookie = (
      name,
      value,
      domain = "localhost",
      path = "/search",
      expDays = 1,
      secure = "secure",
      sameSite = "None"
) => {
      let date = new Date();
      date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
      let expires = date.toUTCString();

      document.cookie = `${name}=${value}; domain=${domain}; path=${path}; expires=${expires}; secure=${secure}; samesite=${sameSite}`;
};

export const get_cookie = (name) => {
      let value = document.cookie.split("; ").find((item) => {
            return item.startsWith(name);
      });

      if (value) {
            value = value.replace(`${name}=`, "");
      }

      return value;
};
