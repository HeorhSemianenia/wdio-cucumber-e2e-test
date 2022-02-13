Feature: Demo feature

Feature description

  @demo
  Scenario Outline: Run first test
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on first search result
    Then URL should match <ExpectedUrl>

    Examples:
      | TestID     | SearchItem | ExpectedUrl           |
      | DEMO_TC001 | WDIO       | https://webdriver.io/ |
