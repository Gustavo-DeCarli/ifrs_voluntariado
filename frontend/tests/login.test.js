
import { Builder, By, until } from "selenium-webdriver";
(async function testFormulario() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:5173");
        const campoEmail = await driver.findElement(By.name("email"));
        const campoSenha = await driver.findElement(By.name("password"));
        const botaoEnviar = await driver.findElement(By.xpath("//button[text()='Entrar']"));
        await campoEmail.sendKeys("admin@ifrs.edu.br");
        await campoSenha.sendKeys("admin123");
        await botaoEnviar.click();
        const mensagem = await driver.wait(
            until.elementLocated(By.id("root")),
            3000
        );
        const texto = await mensagem.getText();
        console.log("Mensagem exibida:", texto);
    } finally {
        await driver.quit();
    }
})();