package stepDefinitions;


import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Map;
import java.util.concurrent.TimeUnit;

public class loginStepDefinition {

    WebDriver driver;

    //=============================== Global Hooks ================================
    @Before(order = 0)
    public void setup() {
        System.out.println("Will be executed before every scenario inside .feature file");
    }

    @After(order = 0)
    public void teardown(){
        System.out.println("Will be executed before every scenario inside .feature file");
    }
    @Before(order = 1)
    public void setup2() {
        System.out.println("Will be executed before every scenario inside .feature file");
    }

    @After(order = 1)
    public void teardown2(){
        System.out.println("Will be executed before every scenario inside .feature file");
    }
    //=============================================================================

    //=============================== Tagged Hooks ================================
    @Before("@First")
    public void setup1() {
        System.out.println("Will be executed before only scenario which has tage @First inside .feature file");
    }

    @After("@First")
    public void teardown1(){
        System.out.println("Will be executed After only scenario which has tage @First inside .feature file");
    }
    //=============================================================================


    @Given("^User navigated to login page$")
    public void user_navigated_to_login_page() {
        System.setProperty("webdriver.chrome.driver", "/Users/waleed.elbarbary/Downloads/BDDFrameWork/src/main/java/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.navigate().to("https://freecrm.com/");
    }

    @When("^Title of login page is Free CRM$")
    public void title_of_login_page_is_Free_CRM() {

        String pageTitle = driver.getTitle();
        Assert.assertEquals("Free CRM software can boost your sales by 30%", pageTitle);

    }

    //@Then("^User Enter \"(.*)\" & \"(.*)\"$")
    @Then("^User Enter userName and Password$")
    public void user_Enter_UserName_Password(
            //String username, String password
            DataTable credentials) {

        //When using Data Table
        //List<List<String>> data = credentials.raw();


        WebDriverWait wait = new WebDriverWait(driver, 30);

        WebElement loginLink = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='collapse navbar-collapse']/ul/li/a[contains(text(),'Log In')]")));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginLink);
        //loginLink.click();

        //When using maps
        for (Map<String, String> datatable : credentials.asMaps(String.class, String.class)) {
            WebElement userNametxtBox = driver.findElement(By.name("email"));

            //When using Data Tables
            //userNametxtBox.sendKeys(data.get(0).get(0));

            //When using Maps
            userNametxtBox.sendKeys(datatable.get("userName"));

            WebElement passwordtxtBox = driver.findElement(By.name("password"));

            //When using Data Tables
            //passwordtxtBox.sendKeys(data.get(0).get(1));

            //When using Maps
            passwordtxtBox.sendKeys(datatable.get("Password"));
        }
    }

    @Then("^User click login button$")
    public void user_click_login_button() {

        WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
        //loginBtn.click();
    }

    @Then("^User is on Home page$")
    public void user_is_on_Home_page() {

        String title = driver.getTitle();
        System.out.println("Home Page title ::" + title);
        Assert.assertEquals("Cogmento CRM", title);
    }

//    @Then("^User navigated to contact Page$")
//    public void user_navigated_to_contact_Page() {
//
//        WebDriverWait wait = new WebDriverWait(driver, 30);
//        WebElement contactLink = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ui fluid container']/div/a[@href='/contacts']")));
//        JavascriptExecutor js = (JavascriptExecutor) driver;
//        js.executeScript("arguments[0].click();", contactLink);
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//        WebElement newContactbtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(" //button[@class='ui linkedin button']/i[@class='edit icon']")));
//        newContactbtn.click();
//
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//    }
//
//    @Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//    public void user_enters_and_and(String firstName, String lastName, String position) {
//
//        WebDriverWait wait = new WebDriverWait(driver, 30);
//        WebElement firstNametxtBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("first_name")));
//        firstNametxtBox.sendKeys(firstName);
//
//        WebElement lastNametxtBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("last_name")));
//        lastNametxtBox.sendKeys(lastName);
//
//
//        WebElement positiontxtBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("position")));
//        positiontxtBox.sendKeys(position);
//
//
//        WebElement savebtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ui right secondary pointing menu toolbar-container']/div/button/i[@class='save icon']")));
//        JavascriptExecutor js3 = (JavascriptExecutor) driver;
//        js3.executeScript("arguments[0].click();", savebtn);
//
//    }

    @Then("^Signout and close the browser$")
    public void sign_out_and_close_the_browser() {

        driver.quit();
    }


}
