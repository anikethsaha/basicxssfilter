const {basicxss} = require("../dist")


test('testing <script>alert("hacked")</script> ', () => {
    expect(basicxss(`<script>alert("hacked")</script>`)).toBe("%253Cscript%253Ealert%28%2522hacked%2522%29%253Cscript%253E");
  });