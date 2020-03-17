class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
)