<?php get_header(); ?>

<article>
  <h2>
    Blog Post (Single): 
    <?php the_title(); ?>
  </h2>
    <p>
      <strong>Article Published On: </strong>
      <time datetime="<?php echo get_the_date(DATE_ATOM); ?>">
        <?php echo get_the_date(); ?>
      </time>
    </p>
    <h3>Post Categories</h3>
    <ul>
      <?php 
        $categories = wp_get_post_categories(get_the_id());
        foreach ($categories as $catID)
        {
          $category = get_category($catID);
          $categoryURL = get_term_link($category);
          ?>
            <li>
              <a href="<?php echo $categoryURL ?>">
                <?php echo $category->name; ?>
              </a>
            </li>
          <?php 
        }
      ?>
    </ul>
    <h3>Post Content</h3>
    <?php the_content(); ?>
</article>

<?php get_footer(); ?>