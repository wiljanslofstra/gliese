<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Cart</h1>
</div>

<form
    class="js-cart"
    method="POST"
    action=""
    data-cart-vat="21"
    data-cart-delivery="4.99"
    data-cart-api="/docs/pages/cart.php"
    data-cart-api-method="POST"
>
    <table class="table">
        <thead>
            <tr>
                <th>Product</th>
                <th width="150">Amount</th>
                <th width="130">Price piece</th>
                <th width="130">Price total</th>
                <th width="30">&nbsp;</th>
            </tr>
        </thead>

        <tbody>
            <?php for ($i = 1; $i <= 5; $i++) : ?>
                <tr class="js-cart-row" data-price="29.99" data-product-id="1234">
                    <td>
                        Product <?= $i; ?>
                        <input type="hidden" name="product[<?= $i; ?>]['product_id']" value="<?= $i; ?>">
                    </td>

                    <td>
                        <input
                            class="form-control js-cart-amount"
                            type="number"
                            name="product[<?= $i; ?>]['amount']"
                            value="1"
                            min="0"
                            max="9"
                            data-min="0"
                            data-max="9"
                        >
                    </td>

                    <td>
                        &euro; 29,99
                    </td>

                    <td class="js-cart-row-price">
                        &euro; 29,99
                    </td>

                    <td>
                        <button class="js-cart-remove" type="button">
                            &times;
                        </button>
                    </td>
                </tr>
            <?php endfor; ?>
        </tbody>

        <tfoot>
            <tr>
                <td colspan="2">&nbsp;</td>
                <td>Total ex</td>
                <td colspan="2">
                    <span class="js-cart-total-ex">&euro; 23,69</span>
                </td>
            </tr>

            <tr>
                <td colspan="2">&nbsp;</td>
                <td>VAT</td>
                <td colspan="2">
                    <span class="js-cart-vat">&euro; 6,30</span>
                </td>
            </tr>

            <tr>
                <td colspan="2">&nbsp;</td>
                <td>Delivery</td>
                <td colspan="2">
                    <span class="js-cart-delivery">&euro; 4,99</span>
                </td>
            </tr>

            <tr>
                <td colspan="2">&nbsp;</td>
                <td>Total</td>
                <td colspan="2">
                    <span class="js-cart-total">&euro; 29,99</span>
                </td>
            </tr>
        </tfoot>
    </table>
</form>

<?php include('../templates/_footer.php'); ?>
