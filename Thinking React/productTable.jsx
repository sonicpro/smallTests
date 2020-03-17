class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        // products input passed from the top component FilterableProductTable.
        this.props.products.forEach((product) => {
            // if (product.category !== lastCategory) {
            //     rows.push(

            //     )
            // }

            rows.push(
                <ProductRow
                  product={product}
                  key={product.name} />
            );
            // lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}