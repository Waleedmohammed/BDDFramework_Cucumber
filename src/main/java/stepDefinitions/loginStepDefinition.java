package stepDefinitions;


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

import java.util.concurrent.TimeUnit;

public class loginStepDefinition {

    WebDriver driver;

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

    @Then("^User Enter UserName & Password$")
    public void user_Enter_UserName_Password() {

        WebDriverWait wait=new WebDriverWait(driver, 30);

        WebElement loginLink = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='collapse navbar-collapse']/ul/li/a[contains(text(),'Log In')]")));
        JavascriptExecutor js = (JavascriptExecutor)driver;
    	 js.executeScript("arguments[0].click();", loginLink);
        //loginLink.click();

        WebElement userNametxtBox = driver.findElement(By.name("email"));
        userNametxtBox.sendKeys("waleed.m.science@gmail.com");

        WebElement passwordtxtBox = driver.findElement(By.name("password"));
        passwordtxtBox.sendKeys("Passwordmmhh88");

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


    @Then("^Signout and close the browser$")
    public void sign_out_and_close_the_browser() {

        driver.quit();
    }


}
