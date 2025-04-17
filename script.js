function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('tel').value.trim();
    const cpf = document.getElementById('CPF').value.trim();
    const rg = document.getElementById('RG').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const nascimento = document.getElementById('nascimento').value;

    // Verificar campos obrigatórios
    if (!nome || !email || !telefone || !cpf || !rg || !pais || !nascimento) {
        console.warn("Preencha todos os campos obrigatórios.");
        alert("⚠️ Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Exibir dados no console
    console.log("📋 Dados do Formulário:");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("CPF:", cpf);
    console.log("RG:", rg);
    console.log("País:", pais);
    console.log("Data de Nascimento:", nascimento);

    alert("✅ Dados validados! Veja o console.");
}