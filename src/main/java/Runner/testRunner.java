package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/waleed.elbarbary/Downloads/BDDFrameWork/src/main/java/Features/contacts.feature",//the path of the feature files
        glue = "stepDefinitions",//the path of the step definition files
        format = {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},//to generate different types of reporting
        dryRun = false, //check mapping between step in feature file and step in step definition class
        monochrome = true, // to generate pretty output
        strict = true
)


public class testRunner {


}
