<?php

namespace Drupal\algolia_react_search\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Algolia React Search Block' block.
 *
 * @Block(
 *  id = "algolia_react_search_block",
 *  admin_label = @Translation("Algolia React Search Block"),
 * )
 */
class AlgoliaReactSearchBlock extends BlockBase
{

    /**
     * {@inheritdoc}
     */
    public function build()
    {
        $build = [];
        $build['algolia_react_search_block'] = [
            '#markup' => '<div id="basic-app"></div>',
            '#attached' => [
                'library' => 'algolia_react_search/react-basic'
            ],
        ];

        return $build;
    }
}
