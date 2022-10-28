

export function App1() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Software y Servicios JJEJ
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Lista_Productos">
                            Lista Productos
                        </Nav.Link>
                        <Nav.Link href="#Modificar_Productos">
                            Modificar Productos
                        </Nav.Link>
                        <Nav.Link href="#Lista_Ventas">Lista Ventas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <main>
                    <Card style={{ height: "calc(100vh - 180px)" }}>
                        <Card.Header><h3>Registro de Ventas Realizadas</h3></Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead className="table-secondary">
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>id Venta</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>22/10/2022</td>
                                        <td>123</td>
                                        <td>$35.000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>22/10/2022</td>
                                        <td>456</td>
                                        <td>$20.000</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>22/10/2022</td>
                                        <td>789</td>
                                        <td>$50.000</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>22/10/2022</td>
                                        <td>110</td>
                                        <td>$1.000</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>22/10/2022</td>
                                        <td>111</td>
                                        <td>$1.000</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>22/10/2022</td>
                                        <td>112</td>
                                        <td>$1.000</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>22/10/2022</td>
                                        <td>113</td>
                                        <td>$1.000</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>22/10/2022</td>
                                        <td>114</td>
                                        <td>$1.000</td>
                                    </tr>
                                    <tr className="table-secondary">                            
                                        <td colSpan={3}>Total Vendido</td>
                                        <td>$110.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="primary">Desarga</Button>{' '}
                        </Card.Body>
                    </Card>
                </main>
            </Container>
            <Container>
                <footer></footer>
            </Container>
        </div>
    );
}

export default App;
