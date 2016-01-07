<ul class="share pull-right">
	<li><a class="btn btn-icon" href="http://twitter.com/home?status=<?php echo wp_title( '&raquo;', FALSE, 'right' ) . ' - ' . urlencode(get_permalink()) .' via @MagparNews';?>" target="_blank"><svg class="icon"><use xlink:href="#icon-twitter"></svg></a></li>
	<li><a class="btn btn-icon" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank"><svg class="icon"><use xlink:href="#icon-facebook"></svg></a></li>
	<li><a class="btn btn-icon" href="https://plus.google.com/share?url=<?php echo urlencode(get_permalink()); ?>" target="_blank"><svg class="icon"><use xlink:href="#icon-google"></svg></a></li>
	<li><a class="btn btn-icon" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_permalink()); ?>&title=<?php echo wp_title( '&raquo;', FALSE, 'right' ); ?>&summary=&source=" target="_blank"><svg class="icon"><use xlink:href="#icon-linkedin"></svg></a></li>
	<li><a class="btn btn-icon" href="mailto:?subject=<?php echo wp_title( '&raquo;', FALSE, 'right' ); ?>&amp;body=Hi,%0D%0A%0D%0AI thought you would be interested in this article on from Magpar: <?php echo wp_title('&raquo;', FALSE, 'right'); ?> – <?php echo urlencode(get_permalink()); ?>"><svg class="icon"><use xlink:href="#icon-mail"></svg></a></li>
</ul>
