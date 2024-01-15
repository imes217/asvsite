@import 'EXT:fluid_styled_content/Configuration/TypoScript/setup.typoscript'
@import 'EXT:asvsite/Configuration/TypoScript/Setup/*.typoscript'

lib.footer = TEXT
lib.footer.value = {$mysitepackage.page.title}
lib.footer.wrap = <footer> &copy | </footer>

page = PAGE
page {
  typeNum = 0
  10 = TEXT
  10.value = Hello World2!
}