<!--
	$VALUED PARTNERS
	- This section has grids installed as it's purely a repeater. Perhaps this should be seperated out later.
-->

<section class="island--thick island--aqua">

	<div class="heading-group">
		<h2 class="has-strap">Our valued partners</h2>
		<h3 class="strap">We work with Consumers, ISPs and Governments all over the world</h3>
	</div>

	<div class="row">

			<?php for ( $i = 0; $i < 8; $i++ ) : ?>

				<div class="col S-all M-3 L-3">

					<?php sg_include(['molecules', 'images', 'image-grid']); ?>

				</div>

			<?php endfor; ?>

	</div>

</section>