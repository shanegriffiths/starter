<div class="nav--top / cf">

	<div class="wrapper">

		<ul class="nav">

			<li class="has-sub-nav">

				<a href="#">Our Company <i class="icon-primary-down"></i></a>

				<ul class="nav__sub-nav">
					<!-- <li><a href="/our-mission">Our Mission</a></li> -->
					<li><a href="/history">History</a></li>
				</ul>

			</li>

			<li>
				<a href="/contact">Contact Us</a>
			</li>

			<li>
				<a href="/broadband" class="btn btn--highlight">UK Broadband Availability</a>
			</li>

			<li class="nav__language-switcher">

				<a href="#"><span id="region" data-location="<?php echo SamKnows\Core\Core::getCurrentRegion(); ?>"><?php echo SamKnows\Core\Core::getCurrentRegionName(); ?></span><i class="icon-cog"></i></a>

				<ul class="nav--country-selector" style="text-align: left;">
					<?php
					$countryList = \SamKnows\Core\Core::getCountryList();
					foreach($countryList as $countryShortcut => $countryName):
					?>
					<li data-location="<?= $countryShortcut; ?>"><a href="#"><?= $countryName; ?></a></li>
					<?php
					endforeach;
					?>
				</ul>

			</li>

			<li class="mobile-button">
				<a href="#menu"><i class="icon-menu"></i></a>
			</li>

		</ul>

	</div>

</div> <!-- / .top-nav -->
