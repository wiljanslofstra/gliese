# IE Targeting (From sassmeister)

```
// ----
// Sass (v3.3.4)
// Compass (v1.0.0.alpha.18)
// ----

// Hacking made easy
// ---
// A couple of Sass functions
// To ease the pain of dealing
// With special values for IE
// ---
// I can see this being useful
// To explain what are those weird `\9`
// Especially for new developers
// Coming up in a project

// Internet Explorer 6-8
// ---
// @param [literal] $value: value for Internet Explorer 6 to 8
@function ie8($value) {
  @return #{$value + ' \9'};
}

// Internet Explorer 9-10
// ---
// @param [literal] $value: value for Internet Explorer 9 and 10
@function ie9($value) {
  @return #{$value + '\0'};
}

// Internet Explorer 6-10
// ---
// @param [literal] $value: value for Internet Explorer 6 to 10
@function ie10($value) {
  @return #{$value + '\9'};
}


test {
  /* Internet Explorer 10 */
  property: ie10(valueForIE10);
  /* Internet Explorer 9 */
  property: ie9(valueForIE9);
  /* Internet Explorer 8 */
  property: ie8(valueForIE8);
  /* Internet Explorer 7 */
  property: ie7(valueForIE7);
  /* Internet Explorer 6 */
  property: ie6(valueForIE6);
  /* Any other browser */
  property: value;
}
```