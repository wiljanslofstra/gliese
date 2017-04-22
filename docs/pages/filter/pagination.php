<div class="pagination">
    <ul>
        <?php
            if ($total_pages > 10) {
                // Always show the first two pages
                $pages = [1, 2];

                // Start counting from the page before the active page
                $count_from = $current_page - 1;

                // Loop through three pages surrounding the active page
                for ($i = $count_from; $i < $count_from + 3; $i++) {
                    if ($i > 0 && $i < $total_pages && !in_array($i, $pages)) {
                        $pages[] = $i;
                    }
                }

                // Add the last two pages
                $pages[] = $total_pages - 1;
                $pages[] = $total_pages;

                // Make sure that page numbers are not recurring in the array
                $pages = array_unique($pages);

                // Save the position where to add ellipsis/space
                $add_ellipsis = [];

                // Loop through all above defined page numbers
                foreach ($pages as $p => $page) {
                    // Get the next number in the array
                    $next_number = ($total_pages - 1 >= $page) ? $pages[$p + 1] : -1;

                    // Check if the difference between this and the next is more than 1.
                    // If this is the case we assume that a spacer can be added on the
                    // next index
                    if ($next_number - $page > 1) {
                        $add_ellipsis[] = $p + 1;
                    }
                }

                // We're going to add ellipsis/space and by not reversing first
                // the array will be modified at the first ellipsis index, and shift
                // all next indexes up. When we're going to insert the next we have
                // a problem because the index is not correct anymore
                $add_ellipsis = array_reverse($add_ellipsis);

                // Add ellipsis on the index in the add_ellipsis array
                foreach ($add_ellipsis as $ind) {
                    array_splice($pages, $ind, 0, ['&hellip;']);
                }
            } else {
                // If less than 10 pages, we just show all page numbers
                $pages = range(1, $total_pages);
            }
        ?>

        <?php foreach ($pages as $page) : ?>
            <?php
                $active = ($page == $current_page);
            ?>
            <li class="<?= ($active) ? 'is-active' : ''; ?>">
                <?= $page; ?>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
